/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlet;

import ejb.session.stateless.UserEntitySessionBeanLocal;
import java.io.IOException;
import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import manager.UserManager;

/**
 *
 * @author User
 */
@WebServlet(name = "Controller", urlPatterns = {"/Controller"})
public class Controller extends HttpServlet {

    @EJB
    private UserEntitySessionBeanLocal userEntitySessionBeanLocal;

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            UserManager userManager = new UserManager(userEntitySessionBeanLocal);
            String path = request.getPathInfo();
            
            switch (path) {
                case "login":
                    // display page - do nothing
                    break;
                case "registration":
                    // display page - do nothing
                case "doLogin": {
                    String username = request.getParameter("name");
                    String password = request.getParameter("password");
                    
                    userManager.userLogin(username, password);
                    
                    //redirect somewhere else?????
                }
                case "doRegistration": {
                    String username = request.getParameter("name");
                    String password = request.getParameter("password");
                    
                    userManager.createUserEntity(username, password);
                    
                    response.sendRedirect(request.getContextPath());
                    return;
                }
                default:
                    //unmatched path will to go error.jsp
                    path = "error";
                    break;
            }
            
            //forward to <path>.jsp
            //don’t need to include context path (automatically added)
            request.getRequestDispatcher("/" + path + ".html")
                    .forward(request, response);

        } catch (Exception e) {
            e.printStackTrace();
            request.getRequestDispatcher("/error.html")
                    .forward(request, response);
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
