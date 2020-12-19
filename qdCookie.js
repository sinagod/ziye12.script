let CookieQDs1 = [];
let CookieQDs2 = [];
let CookieQDs3 = [];
let CookieQDs = [];

// 判断github action里面是否有京东ck
if (process.env.QD_COOKIE1) {
  if (process.env.QD_COOKIE1.indexOf('--') > -1) {
      console.log(`您的cookie选择的是用--隔开\n`)
      CookieQDs1 = process.env.QD_COOKIE1.split('--');
  } else if (process.env.QD_COOKIE1.indexOf('&&') > -1){
      console.log(`您的cookie选择的是用&&隔开\n`)
      CookieQDs1 = process.env.QD_COOKIE1.split('&&');
  }
}

if (process.env.QD_COOKIE2) {
  if (process.env.QD_COOKIE2.indexOf('--') > -1) {
      console.log(`您的cookie选择的是用--隔开\n`)
      CookieQDs2 = process.env.QD_COOKIE2.split('--');
  } else if (process.env.QD_COOKIE2.indexOf('&&') > -1){
      console.log(`您的cookie选择的是用&&隔开\n`)
      CookieQDs2 = process.env.QD_COOKIE2.split('&&');
  }
}

if (process.env.QD_COOKIE3) {
  if (process.env.QD_COOKIE3.indexOf('--') > -1) {
      console.log(`您的cookie选择的是用--隔开\n`)
      CookieQDs2 = process.env.QD_COOKIE3.split('--');
  } else if (process.env.QD_COOKIE3.indexOf('&&') > -1){
      console.log(`您的cookie选择的是用&&隔开\n`)
      CookieQDs2 = process.env.QD_COOKIE3.split('&&');
  }
}

CookieQDs = CookieQDs1.concat(CookieQDs2).concat(CookieQDs3)

for (let i = 0; i < CookieQDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieQD' + index] = CookieQDs[i];
}

