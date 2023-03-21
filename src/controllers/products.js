
import Product from "../models/products";
export const getAll = async (req, res) => {
  try {
    const products = await Product.find();
    if(products.length == 0){
      return res.status(404).json({
        message: "khong co san pham nao"
      });
    }
    return res.json({
      message: 'lay danh sach thanh cong',
      products
    })
  } catch (error) {
    return res.status(404).json({
      message: error
    })
  }
};
export const getOne = async(req,res)=>{
  try {
    const product = await Product.findById(req.params.id)
    console.log(product)
    if(!product){
      return res.json({
        message: 'khong co san pham nao'
      })
    }
    return res.json({
      message: 'lay san pham thanh cong',
      product
    })
  } catch (error) {
    return res.status(404).json({
      message: error
    })
  }
};
export const Addpro = async (req,res) => {
  try {
    const product = await Product.create(req.body)
    if(!product){
      return res.json({
        message:'Them san pham khong thanh cong'
      })
    }
    return res.json({
      message:"them san pham thanh cong",
      product
    })
  } catch (error) {
    return res.status(404).json({
      message: error
    })
  }
}
export const update = async(req,res)=>{
  try {
    const product = await Product.findOneAndUpdate({_id: req.params.id},req.body,{
      new: true
    })
    if(!product){
      return res.json({
        message: "cap nhat san pham that bai"
      })
    }
    return res.json({
      message:"cap nhat san pham thanh cong",
      product
    })
  } catch (error) {
    return res.status(404).json({
      message: error
    })
  }
}
export const remove = async (req,res)=>{
  try {
    const products = await Product.findByIdAndDelete(req.params.id)
    return res.json({
      message: "Xoa san pham thanh cong",
      products
    })
  } catch (error) {
    return res.status(404).json({
      message: error
    })
  }
}
