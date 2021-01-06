import axios from 'axios';

const getData = async (url) => {
    const { data } = await axios.get(url);
    return data;
}

export {
    getData
}