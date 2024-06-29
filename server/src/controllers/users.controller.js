import { getData } from '../../../client/src/utils/api';

const userController = {};

controller.getUsers = (res, req) => {
  try {
    return getData();
  } catch (err) {
    console.error(err);
  }
};

module.exports = userController;
