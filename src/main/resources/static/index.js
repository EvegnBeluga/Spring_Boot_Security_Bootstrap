import {
    fillUsersTable, getRolesForNewUser, createNewUser,
    fillUserForm, updateCurrentUser, deleteCurrentUser,
    fullCurrentUserTable
} from "./functions.js";


//при загрузке заполняется главная таблица юзеров

window.onload = () => {
    fillUsersTable()
    fullCurrentUserTable()
}

$(document).ready(() => {
    //при активации вкладки Нового юзера зполняются роли
    $('.nav-tabs a[href="#NewUser"]').on('show.bs.tab', () => {
        getRolesForNewUser()
        //при нажатии кноки создания нового юзера создаётся юзер
        document.getElementById('createNewUser').addEventListener('click', createNewUser)
    })

    //очистка формы нового юзера
    $('.nav-tabs a[href="#UserTable"]').on('show.bs.tab', () => {
        document.getElementById('createUserForm').reset()
    })

    //заполнение формы редактирования юзера
    $('#modalEdit').off().on('show.bs.modal', event => {
        let id = $(event.relatedTarget).attr("data-index")
        fillUserForm(id, document.forms['editUserModalForm'], 'Edit')
        //при нажатии кнопки обновления юзер обновляется
        document.getElementById('updateUser').addEventListener('click', updateCurrentUser)

    })

    //заполнение формы удаления
    $('#modalDelete').on('show.bs.modal', event => {
        let id = $(event.relatedTarget).attr("data-index")
        fillUserForm(id, document.forms['modalDeleteForm'], 'Delete')
        //при нажатии кнопки удаления юзер удаляется
        document.getElementById('deleteUser').addEventListener('click', (event) => {
            deleteCurrentUser(id)
        })
    })
})
