FROM node:18 as deps
WORKDIR /app



COPY .yarnrc.yml .nvmrc  package.json yarn.lock* package-lock.json* ./
COPY .yarn  .yarn 
#COPY ./packages /app/packages
#RUN yarn install --network-timeout 1000000
RUN yarn install

# Rebuild the source code only when needed
FROM node:18 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules /app/node_modules
COPY . .

RUN yarn postseo
RUN yarn build

# Production image, copy all the files and run next
FROM node:18-alpine AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
