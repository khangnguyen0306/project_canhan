
import db from "../models";
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        console.log(data);
        console.log('------------------------');
        return res.render('homePage.ejs',{
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e)
    }


}

let getInfomation = (req, res) => {
    return res.render('informationPage.ejs')

}

module.exports = {
    getHomePage: getHomePage,
    getInfomation: getInfomation
}