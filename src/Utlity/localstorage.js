const getLoaclStorage = () => {
    const storeJob = localStorage.getItem('job')
    if(storeJob){
        return JSON.parse(storeJob)
    }
    return []
}

const saveToLocalStorage = (id) => {
    const storeJobApplacation = getLoaclStorage()
    const exists = storeJobApplacation.find ( jobId => jobId == id )
    if(!exists){
        storeJobApplacation.push(id)
        localStorage.setItem('job',JSON.stringify(storeJobApplacation))
    }
}

export { saveToLocalStorage ,getLoaclStorage }