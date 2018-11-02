package edu.csumb.cst438.otterbuyservice.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import edu.csumb.cst438.otterbuyservice.api.entities.Product;
import edu.csumb.cst438.otterbuyservice.business.Manager;
import edu.csumb.cst438.otterbuyservice.data.ProductDbClient;

@RestController
public class OtterBuyController{
    @Autowired
    Manager manager;
    @GetMapping("/products")
    @ResponseBody
    List<Product> getProducts(){
        return null;
    }

}