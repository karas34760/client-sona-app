FROM node:18 as deps
WORKDIR /app

RUN npm install -g yarn
# install dependencies
COPY .yarnrc.yml  package.json yarn.lock* package-lock.json* * ./
COPY ./packages /app/packages

RUN yarn install

# Rebuild the source code only when needed
FROM node:18 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules /app/node_modules
COPY . .


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

CMD ["yarn", "start"]
