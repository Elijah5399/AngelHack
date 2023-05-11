/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package manager;

import ejb.session.stateless.UserEntitySessionBeanLocal;
import ejb.util.exception.InvalidLoginCredentialException;
import entity.UserEntity;

/**
 *
 * @author User
 */
public class UserManager {
    
    private UserEntitySessionBeanLocal userEntitySessionBeanLocal;

    public UserManager() {
    }

    public UserManager(UserEntitySessionBeanLocal userEntitySessionBeanLocal) {
        this.userEntitySessionBeanLocal = userEntitySessionBeanLocal;
    }
    
    public UserEntity userLogin(String username, String password) throws InvalidLoginCredentialException {
        return userEntitySessionBeanLocal.userLogin(username, password);
    }
    
}
