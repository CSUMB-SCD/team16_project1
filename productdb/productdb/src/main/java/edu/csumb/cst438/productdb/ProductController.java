package edu.csumb.cst438.productdb;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.csumb.cst438.productdb.ProductRepository;
import edu.csumb.cst438.productdb.entities.Product;

@RestController
public class ProductController{
    @Autowired
    ProductRepository productRepo;

    @GetMapping("/products")
    public List<Product> getAll(){
        List<Product> result = productRepo.findAll();
        return result;
    }
}