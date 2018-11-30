package edu.csumb.cst438.productdb.entities;

public class Product{
    private Price price;
    private Description description;
    private String id;
    private Image image;
    private int stockNum;
    private String name;


    public Product(Image image,String name,Description description,Price price, int stockNum){
        this.description = description;
        this.price = price;
        this.image = image;
        this.stockNum = stockNum;
        this.name = name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
   
    public String getName() {
        return this.name;
    }

    public void setId(String id){
        this.id = id;
    }

    public String getId(){
        return this.id;
    }

    public void setStockNum(int stockNum) {
        this.stockNum = stockNum;
    }
    
    public void setDescription(Description description) {
        this.description =description;
    }

    public void setPrice(Price price) {
        this.price = price;
    }
 
    public void setImage(Image image) {
        this.image = image;
    }
    
    public Description getDescription(){
        return this.description;
    }

    public Price getPrice(Price price){
        return this.price;
    }
  
    public Image getImage() {
        return this.image;
    }

    public int getStockNum() {
        return this.stockNum;
    }
}