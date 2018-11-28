package edu.csumb.cst438.productdb;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import edu.csumb.cst438.productdb.entities.Product;

public interface ProductRepository extends MongoRepository<Product, String>{
    @Query (value = "{'_id':'?0'}")
    Product findId(String id);

    @Query (value = "{'description.name':?0}")   
    Product findName(String name);
 
}