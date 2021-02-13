class ProductModel{
    private connection:any;

    constructor(DBConnection:any){
        this.connection = DBConnection;
    }


    async all(){

        return await this.connection.ref('product').once('value', (snapshot:any) => {
            return snapshot
        })

    }



}


export default ProductModel