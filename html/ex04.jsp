<%@ page language="java" contentType="text/html;
charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>html/ex04.jsp 1214</title>
</head>
<body>
    <%
    String userId = request.getParameter("user_name");
    String userBirth = request.getParameter("birthday");
    String userSex = request.getParameter("sex");
    String userEmail = request.getParameter("myemail");
    String userEmailAgree = request.getParameter("agree");
    String userPhone = request.getParameter("phone");
    String usernumber1 = request.getParameter("number1");
    String usernumber2 = request.getParameter("number2");
    String userJob = request.getParameter("job");
    String [] userHobby = request.getParameterValues("hobby");
    String userComment = request.getParameter("comment");
    %>
    <h1>아이디: <%=userId%></h1>
    <h1>생년월일: <%=userBirth%></h1>
    <h1>성별: <%=userSex%></h1>
    <h1>E-mail: <%=userEmail%></h1>
    <h1>메일수신: <%=userEmailAgree%></h1>
    <h1>핸드폰: <%=userPhone%>-<%=usernumber1%>-<%=usernumber2%></h1>
    <h1>직업: <%=userJob%></h1>
    <%
        for(String hobby : userHobby) {
    %>
    <h1>취미: <%=hobby%></h1>
    <%   
        }
    %>
    <h1>자기소개: <%=userComment%></h1>

</body>
</html>