'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  //访问的时候 路径是 /
  router.get('/', controller.home.index);
};
