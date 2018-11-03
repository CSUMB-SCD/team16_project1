package edu.csumb.cst438.userdb;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.csumb.cst438.userdb.UserRepository;
import edu.csumb.cst438.userdb.entities.User;

@RestController
public class UserController{
    @Autowired
    UserRepository userRepo;

    @GetMapping("/users")
    public List<User> getAll(){
        List<User> result = userRepo.findAll();
        return result;
    }
}