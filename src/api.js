import axios from "axios";
import config from "./config";
export const getJobs = async () => {
        const res = await getter(`${config.base_url}public/jobs`);
        if(PR(res)){
            return res;
        }
        else {
            getJobs();
        }
}
export const getJob = async (id) => {
    const res = await poster(`${config.base_url}public/job`,{job:id},'');
    if(PR(res)){
        return res;
    }
    else {
        getJob(id);
    }
}
const PR = (response) => {
    //console.log(response?.status);
    if (response?.status === 303) {
      // eslint-disable-next-line no-return-assign
      return false;
    }
    return response;
};
  export const poster = async (url, payload, token) => {
    try {
      const post = await axios.post(url, payload, {
        headers: { Authorization: `Bearer ${token}`},
      });
      return post;
    } catch (err) {
      if (err?.response) {
        return err?.response;
      }
      return err.response;
    }
  };
  export const getter = async (url, token) => {
    //console.log(url, token);
    try {
      const post = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return post;
    } catch (err) {
      if (err?.response) {
        return err?.response;
      }
      return err;
    }
  };