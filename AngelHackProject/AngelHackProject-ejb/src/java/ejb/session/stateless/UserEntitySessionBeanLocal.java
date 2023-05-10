/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ejb.session.stateless;

import ejb.util.exception.InvalidLoginCredentialException;
import ejb.util.exception.UserNotFoundException;
import entity.UserEntity;
import javax.ejb.Local;

/**
 *
 * @author User
 */
@Local
public interface UserEntitySessionBeanLocal {

    public void createUserEntity(UserEntity userEntity);

    public UserEntity retrieveUserByUsername(String username) throws UserNotFoundException;

    public UserEntity userLogin(String username, String password) throws InvalidLoginCredentialException;
    
}
