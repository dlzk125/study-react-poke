import { MyPoke } from '../interface/poke';

const giftFriends = () => {
  const getList = (): MyPoke[] => {
    const receivedGiftsStringify: string = window.localStorage.getItem('receivedGifts') || '';
    const receivedGifts: MyPoke[] = JSON.parse(receivedGiftsStringify);
    return receivedGifts;
  };

  const setItem = (payload: MyPoke) => {
    const receivedGifts: MyPoke[] = getList() || [];

    receivedGifts.push(payload);
    window.localStorage.setItem('receivedGifts', JSON.stringify(receivedGifts));
  };

  return { setItem, getList };
};

export default giftFriends;
