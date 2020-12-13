import { useEffect } from 'react';
import { IRow } from './currencyTable';

export interface IUseCurrencyTableProp extends ILoadEvent {
  rows: IRow[];
}

interface ILoadEvent {
  getCurrency: () => void;
}

const useCurrencyTable = ({ getCurrency }: ILoadEvent): void => {
  useEffect(() => {
    (async () => await getCurrency())();
  }, []);
};

export default useCurrencyTable;
