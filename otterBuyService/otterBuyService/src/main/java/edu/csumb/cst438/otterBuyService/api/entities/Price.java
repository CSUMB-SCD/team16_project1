package edu.csumb.cst438.otterbuyservice.api.entities;

public class Price{
    private double price;
    //Add price
    
    public Price (int price){
        this.price = price;
    }

    /**
     * @param price the price to set
     */
    public void setPrice(double price) {
        this.price = price;
    }

    /**
     * @return the price
     */
    public double getPrice() {
        return this.price;
    }
}