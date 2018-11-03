package edu.csumb.cst438.userdb.entities;

public class User{
    String username;
    double credits;

    public User(String username,double credits){
        this.username = username;
        this.credits = credits;
    }

    /**
     * @return the credits
     */
    public double getCredits() {
        return this.credits;
    }

    /**
     * @return the username
     */
    public String getUsername() {
        return this.username;
    }

    /**
     * @param credits the credits to set
     */
    public void setCredits(double credits) {
        this.credits = credits;
    }

    /**
     * @param username the username to set
     */
    public void setUsername(String username) {
        this.username = username;
    }
}