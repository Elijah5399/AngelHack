/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ejb.session.stateless;

import ejb.util.exception.InvalidLoginCredentialException;
import ejb.util.exception.UserNotFoundException;
import entity.UserEntity;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.NonUniqueResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

/**
 *
 * @author User
 */
@Stateless
public class UserEntitySessionBean implements UserEntitySessionBeanLocal {

    @PersistenceContext
    private EntityManager em;

    // Add business logic below. (Right-click in editor and choose
    // "Insert Code > Add Business Method")
    
    @Override
    public void createUserEntity(UserEntity userEntity) {
        em.persist(userEntity);
    }
    
    @Override
    public UserEntity retrieveUserByUsername(String username) throws UserNotFoundException {
        Query query = em.createQuery("SELECT u FROM UserEntity u WHERE u.username = :inUsername");
        query.setParameter("inUsername", username);
        
        try {
            return (UserEntity) query.getSingleResult();
        } catch (NoResultException | NonUniqueResultException ex) {
            throw new UserNotFoundException("User Username " + username + " does not exist!");
        }
    }
    
    @Override
    public UserEntity userLogin(String username, String password) throws InvalidLoginCredentialException {
        try {
            UserEntity userEntity = retrieveUserByUsername(username);
            
            if (userEntity.getPassword().equals(password)) {
                return userEntity;
            } else {
                throw new InvalidLoginCredentialException("Username does not exist or invalid password!");
            }
        } catch (UserNotFoundException ex) {
            throw new InvalidLoginCredentialException("Username does not exist or invalid password!");
        }
    }
}
