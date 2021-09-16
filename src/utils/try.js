module.exports= function (fun) {
    try {
        return fun;
    } catch (error) {
        alert(error);
    }
}