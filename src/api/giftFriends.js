const giftFriends = () => {
  const getList = () => {
    const receivedGifts = JSON.parse(window.localStorage.getItem('receivedGifts'));
    return receivedGifts;
  }

  const setItem = (payload = {}) => {
    const receivedGifts = getList() || [];

    const { pokeId, friendId } = payload;
    receivedGifts.push({ pokeId, friendId });
    window.localStorage.setItem('receivedGifts', JSON.stringify(receivedGifts));
  }

  return { setItem, getList };
}

export default giftFriends;
