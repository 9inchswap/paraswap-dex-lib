import { DexParams } from './types';
import { DexConfigMap, AdapterMappings } from '../../types';
import { Network, SwapSide } from '../../constants';

export const NineinchConfig: DexConfigMap<DexParams> = {
  Nineinch: {
    [Network.MAINNET]: {
      factoryAddress: '0xcBAE5C3f8259181EB7E2309BC4c72fDF02dD56D8',
      initCode:
        '0xd2cf61d4acad30e9fe5ec59d0f94de554d88701f1bd8fc635546866716718511',
      poolGasCost: 100 * 1000,
      feeCode: 20,
      router: '0xa79882a5Bcd455c6e582dAD43f3f3F2c9C8264EB',
    },
  },
};

export const Adapters: Record<number, AdapterMappings> = {
  [Network.MAINNET]: {
    [SwapSide.SELL]: [
      {
        name: 'NineInchAdapter01',
        index: 0,
      },
    ],
    [SwapSide.BUY]: [
      {
        name: 'NineInchBuyAdapter',
        index: 1,
      },
    ],
  },
};
