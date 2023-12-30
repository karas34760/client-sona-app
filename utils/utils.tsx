import { AbiItem } from 'web3-utils';

export const convertHex = (color: string, opacity: number) => {
  const hexColorToRGBA = `
      ${parseInt(color.substring(1, 3), 16)},
      ${parseInt(color.substring(3, 5), 16)},
      ${parseInt(color.substring(5, 7), 16)}, ${opacity}`;

  return `rgba(${hexColorToRGBA})`;
};

// https://gist.github.com/nmsdvid/8807205
export const debounce = (callback: any, delay = 250) => {
  let timeoutId: any;
  return (...args: any) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = null;
      callback(...args);
    }, delay);
  };
};

// https://jsfiddle.net/jonathansampson/m7G64/
export const throttle = (callback: any, limit = 250) => {
  let wait = false; // Initially, we're not waiting
  return () => {
    // We return a throttled function
    if (!wait) {
      // If we're not waiting
      callback.call(); // Execute users function
      wait = true; // Prevent future invocations
      setTimeout(() => {
        // After a period of time
        wait = false; // And allow future invocations
      }, limit);
    }
  };
};
export const CONTRACT_MARKETPLACE_ABI =
  '[{"inputs":[{"internalType":"address","name":"paymentMethod","type":"address"},{"internalType":"address","name":"balanceAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"eventAddress","type":"address"},{"internalType":"uint256","name":"tier","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"PriceNotMet","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"seller","type":"address"},{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":true,"internalType":"address","name":"eventAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tier","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"signature","type":"bytes"}],"name":"BuyItem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes","name":"signature","type":"bytes"},{"indexed":true,"internalType":"address","name":"signer","type":"address"},{"indexed":true,"internalType":"address","name":"eventAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tier","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"CancelSignature","type":"event"},{"inputs":[{"components":[{"internalType":"address","name":"eventAddress","type":"address"},{"internalType":"uint256","name":"tier","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"internalType":"struct Marketplace.SignatureParams","name":"params","type":"tuple"},{"internalType":"bytes","name":"signature","type":"bytes"},{"internalType":"address","name":"offerer","type":"address"}],"name":"acceptOffer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"eventAddress","type":"address"},{"internalType":"uint256","name":"tier","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"internalType":"struct Marketplace.SignatureParams","name":"params","type":"tuple"},{"internalType":"bytes","name":"signature","type":"bytes"},{"internalType":"address","name":"seller","type":"address"}],"name":"buyItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"eventAddress","type":"address"},{"internalType":"uint256","name":"tier","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"internalType":"struct Marketplace.SignatureParams","name":"params","type":"tuple"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"cancelSignature","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"eventAddress","type":"address"},{"internalType":"uint256","name":"tier","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"internalType":"struct Marketplace.SignatureParams","name":"params","type":"tuple"}],"name":"hashMessage","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"eventAddress","type":"address"},{"internalType":"uint256","name":"tier","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"internalType":"struct Marketplace.SignatureParams","name":"params","type":"tuple"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"verify","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function"}]';
export const CONTRACT_USDT_ABI =
  '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]';

export const CONTRACT_TICKIFI_ABI =
  '[{"inputs":[{"internalType":"address","name":"balanceContract","type":"address"},{"internalType":"address","name":"organizerContract","type":"address"},{"internalType":"address","name":"timestampContract","type":"address"},{"internalType":"address","name":"lockableContract","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"eventAddress","type":"address"},{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"tiers","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"BuyTickets","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"organizer","type":"address"},{"indexed":false,"internalType":"address","name":"eventContract","type":"address"}],"name":"EventCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":true,"internalType":"address","name":"eventAddress","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"tiers","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"RefundTicket","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"address","name":"eventAddress","type":"address"},{"internalType":"uint256[]","name":"tiers","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"buyTickets","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"eventAddress","type":"address"},{"internalType":"address","name":"organizer","type":"address"},{"components":[{"internalType":"uint256","name":"TimeForSell","type":"uint256"},{"internalType":"uint256","name":"DeadlineForSell","type":"uint256"},{"internalType":"uint256","name":"StartTime","type":"uint256"},{"internalType":"uint256","name":"EndTime","type":"uint256"}],"internalType":"struct ITimestamp.EventTimestamp","name":"time","type":"tuple"}],"name":"createEvent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"eventAddress","type":"address"},{"internalType":"uint256[]","name":"tiers","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"refundTickets","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"eventAddress","type":"address"},{"internalType":"uint256[]","name":"tiers","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"refundTicketsFullPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"eventAddress","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"setStatusEvent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"verifyAddress","outputs":[],"stateMutability":"nonpayable","type":"function"}]';
export const USDT_ADDRESS = '0x4A90D5aE01F03B650cdc8D3A94358F364D98d096'; // USDT
export const TICKIFI_ADDRESS = '0x513ea9cB7f731a52b4277473b22393F183E18E63';
export const TARGET_ADDRESS = '0x06E3b4Fbc959fD7C800D92CDb865BE077cC86302'; // Send USDT Create Event
export const BALANCE_ADDRESS = '0x478F49fA41228e19c1900638e9d2642aA2565acB'; // Send approve send usdt adress Buy Ticket
export const MARKETPLACE_ADDRESS = '0x8F637EF1dF318457B7d92eFbDDc7E4C3507869bA';
export const CONTRACT_EVENT_ABI: AbiItem[] = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'tikifi',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'eventUri',
        type: 'string',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'tier',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'uri',
            type: 'string',
          },
        ],
        internalType: 'struct IEvent.Ticket[]',
        name: 'tickets',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'ApprovalForAll',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tier',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'BurnTickets',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256[]',
        name: 'tiers',
        type: 'uint256[]',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'amounts',
        type: 'uint256[]',
      },
    ],
    name: 'BurnTicketsBatch',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'string',
        name: 'previousUri',
        type: 'string',
      },
      {
        indexed: true,
        internalType: 'string',
        name: 'newUri',
        type: 'string',
      },
    ],
    name: 'EventUriChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'minter',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256[]',
        name: 'tiers',
        type: 'uint256[]',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'amounts',
        type: 'uint256[]',
      },
    ],
    name: 'MintTicketBatch',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'values',
        type: 'uint256[]',
      },
    ],
    name: 'TransferBatch',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'TransferSingle',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'value',
        type: 'string',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'URI',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tier',
        type: 'uint256',
      },
    ],
    name: 'UpdateTicket',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: '_allTiers',
    outputs: [
      {
        internalType: 'uint256',
        name: 'tier',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'uri',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: '_eventUri',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'accounts',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]',
      },
    ],
    name: 'balanceOfBatch',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'isApprovedForAll',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: 'amounts',
        type: 'uint256[]',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'safeBatchTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'uri',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getEventUri',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tier',
        type: 'uint256',
      },
    ],
    name: 'getRemainingAmountOfTickets',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'tier',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'uri',
            type: 'string',
          },
        ],
        internalType: 'struct IEvent.Ticket',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: 'tiers',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: 'amounts',
        type: 'uint256[]',
      },
    ],
    name: 'calculatePrice',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'newName',
        type: 'string',
      },
    ],
    name: 'changeEventUri',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256[]',
        name: 'tiers',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: 'amounts',
        type: 'uint256[]',
      },
    ],
    name: 'mintBatch',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: 'tiers',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: 'amounts',
        type: 'uint256[]',
      },
    ],
    name: 'burnBatch',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tier',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'tier',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'uri',
            type: 'string',
          },
        ],
        internalType: 'struct IEvent.Ticket',
        name: 'newTicket',
        type: 'tuple',
      },
    ],
    name: 'updateTier',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
