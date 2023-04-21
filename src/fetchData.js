function getSuspender(promise)
{
  let status='pending';
  let response;

  const suspender=promise.then(
     (res)=>{
        status='success';
        response=res;
     },
     (err)=>{
        status='error';
        response=err;
     }
  );
  const read=()=>{
    switch(status){
        case 'pending': throw suspender;
        case 'error': throw response;
        default : return response;
    }
  }

  return {read};
}
export function fectchData(url)
{
    const promise=fetch('http://localhost:8012/ecommerce/bd_request/get/'+url)
    .then((response)=> response.json())
    .then((data)=>data);

    return getSuspender(promise);
}

