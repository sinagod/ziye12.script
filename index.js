//'use strict';
exports.main_handler = async (event, context, callback) => {
  try {
    delete require.cache[require.resolve('./qqreads.js')];
    require('./qqreads.js')
  } catch (e) {
    console.error(e)
  }
}
