package edu.csumb.cst438.productdb.entities;

public class Price{
    private double price;
    //Add price
    
    public Price (double price){
        this.price = price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getPrice() {
        return this.price;
    }
}