class View{
    static showErr(err){
        console.log(err);
    }

    static categoryList(data){
        console.table(data)
    }
}

module.exports = View