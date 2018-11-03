package edu.csumb.cst438.otterbuyservice.api.entities;

import java.util.List;

class Image{
    private List<String> images;

    public Image(List<String> images){
        this.images = images;
    }
    
    public void setImages(List<String> images) {
        this.images = images;
    }

    public List<String> getImages() {
        return this.images;
    }


}