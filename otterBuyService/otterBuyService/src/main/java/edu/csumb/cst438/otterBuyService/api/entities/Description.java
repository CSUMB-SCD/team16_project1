package edu.csumb.cst438.otterbuyservice.api.entities;

public class Description{
    private String name;
    //Add actuall description
    
    public Description (String name){
        this.name = name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return the name
     */
    public String getName() {
        return this.name;
    }
}