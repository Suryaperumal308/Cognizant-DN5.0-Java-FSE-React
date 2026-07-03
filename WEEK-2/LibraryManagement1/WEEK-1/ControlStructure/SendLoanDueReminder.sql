BEGIN
    FOR loan IN (
        SELECT c.CustomerName,
               l.DueDate
        FROM Customers c
        JOIN Loans l
        ON c.CustomerID = l.CustomerID
        WHERE l.DueDate BETWEEN SYSDATE AND SYSDATE + 30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Dear '
            || loan.CustomerName
            || ', your loan is due on '
            || TO_CHAR(loan.DueDate,'DD-MON-YYYY')
        );
    END LOOP;
END;