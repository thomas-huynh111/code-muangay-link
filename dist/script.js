var array = [
  {
    code: '123',
    url: 'https://zalo.me/app/link/zapps/4076912130205911270/?menuGUID=d9e920e4-2155-4143-93f3-2ab8fe509a4a'
  },
  {
    code: '223',
    url: 'https://zalo.me/app/link/zapps/4076912130205911270/?menuGUID=f6339d8e-743a-488f-b15a-8459edf724d0'
  }
]

$("#myButton").click(function() {
  var code = $(".input-code").val();
  if(array.find(v => v.code === code)) {
     window.open(array.find(v => v.code === code).url,'_blank');
  }
})