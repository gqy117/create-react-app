import { useEffect } from 'react';
import { IRow } from '../CurrencyTable';

export interface IUseCurrencyTableProp extends ILoadEvent {
  rows: IRow[];
}

interface ILoadEvent {
  load: () => void;
}

const useCurrencyTable = ({ load }: ILoadEvent): void => {
  useEffect(() => {
    (async () => await load())();
  }, []);
};

export default useCurrencyTable;
