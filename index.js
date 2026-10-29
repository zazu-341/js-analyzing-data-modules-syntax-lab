require('datejs')


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};

function combineUsers(...args){
  const combinedObject = {
    users: []
  }

  for (const item of args){
  combinedObject.users = [...combinedObject.users, ...item]
}

combinedObject.merge_date = Date.today().toString("M/d/yyyy");

return(combinedObject)
}

 