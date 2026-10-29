requestAnimationFrame('datejs')


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

function mergeDate(date){
  date.forEach(item => {
    console.log(Date.parse(item.date).toString("hh:mmtt MMMM dS. yyyy"))
  })
}

return(combinedObject)
};
