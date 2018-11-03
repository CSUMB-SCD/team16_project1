package edu.csumb.cst438.otterbuyservice.api.entities;

public class Product{
    private Price price;
    private Description description;
    private String id;
    private Image image;

    public Product(String id,Image image,Description description,Price price){
        this.description = description;
        this.price = price;
        this.image = image;
    }

    public void setId(String id){
        this.id = id;
    }

    public String getId(){
        return this.id;
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
        return image;
    }
}