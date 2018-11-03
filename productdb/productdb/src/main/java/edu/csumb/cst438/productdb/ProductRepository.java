package edu.csumb.cst438.productdb;

import org.springframework.data.mongodb.repository.MongoRepository;

import edu.csumb.cst438.productdb.entities.Product;

public interface ProductRepository extends MongoRepository<Product, String>{
    
}