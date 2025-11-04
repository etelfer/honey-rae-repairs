export const getCustomerByUserId = (userId) => {
    return fetch(`http://localhost:8088/customers?UserId=${userId}&_expand=user`).then((res) =>
    res.json())
}