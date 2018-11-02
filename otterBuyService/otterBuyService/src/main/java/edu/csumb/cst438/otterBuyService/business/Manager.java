package edu.csumb.cst438.otterbuyservice.business;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.csumb.cst438.otterbuyservice.api.entities.Product;
import edu.csumb.cst438.otterbuyservice.data.ProductDbClient;

import java.util.*;

@Service
public class Manager{
    @Autowired
    ProductDbClient productDbClient;
    public List<Product> getproducts(){
        return null;
    }


}