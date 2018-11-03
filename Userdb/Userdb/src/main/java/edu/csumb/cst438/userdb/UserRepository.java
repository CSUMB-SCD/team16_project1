package edu.csumb.cst438.userdb;

import org.springframework.data.mongodb.repository.MongoRepository;

import edu.csumb.cst438.userdb.entities.User;

public interface UserRepository extends MongoRepository<User, String>{
    
}