import * as types from '../constants/ActionTypes'
import Axios from 'axios';
import {notify} from 'react-notify-toast';

import authHeader from '../helpers/authHeader'

const apiUrl = 'https://resapi.herokuapp.com/api/';
let uri = null

export const createCategory = res => ({ type: types.ADD_CATEGORY, id: res.id, title: res.title, description: res.description  })
export const removeCategory = res => ({ type: types.DELETE_CATEGORY, id: res.id })
export const updateCategory = res => ({ type: types.EDIT_CATEGORY, id: res.id, title: res.title, description: res.description  })

export const createRecipe = res => ({ type: types.ADD_RECIPE, id: res.id, title: res.title, description: res.description  })
export const removeRecipe = res => ({ type: types.DELETE_RECIPE, id: res.id })
export const updateRecipe = res => ({ type: types.EDIT_RECIPE, id: res.id, title: res.title, description: res.description  })

export const login = res => ({ type: types.LOGIN_USER, token: res.token, userid: res.userid, message: res.message  })
export const register = res => ({ type: types.REGISTER_USER, registering: true, message: res.message  })


export const fetchCategoriesSuccess = (categories) => ({
  type: types.GET_CATEGORIES,
  categories
})

export const fetchRecipesSuccess = (recipes) => ({
  type: types.GET_RECIPES,
  recipes
})

export const paginate = (meta) => ({
  type: types.PAGINATE,
  meta
})

export const fetchCategories = (userid, url) => {
    if (url) {
      uri = `https://resapi.herokuapp.com${url}`
    } else {
      uri = `${apiUrl}${'users/'}${userid}${'/categories'}`
    }
    return (dispatch) => {
      return Axios({
          method: 'get',
          url: uri,
          headers: authHeader()
        })
        .then(response => {
          dispatch(fetchCategoriesSuccess(response.data.items))
          dispatch(paginate(response.data.meta))
        })
        .catch(error => {
          if (error.response.data.message.title) {
            notify.show(error.response.data.message.title, 'error', 4000);
          } else {
            notify.show(error.response.data.message, 'error', 4000);
          }
        });
    };
};

export const fetchRecipes = (categoryid, url) => {
  if (url) {
    uri = `https://resapi.herokuapp.com${url}`
  } else {
    uri = `${apiUrl}${'categories/'}${categoryid}${'/recipes'}`
  }
  return (dispatch) => {
    return Axios({
        method: 'get',
        url: uri,
        headers: authHeader()
      })
      .then(response => {
        dispatch(fetchRecipesSuccess(response.data.items))
        dispatch(paginate(response.data.meta))
      })
      .catch(error => {
        if (error.response.data.message.title) {
          notify.show(error.response.data.message.title, 'error', 4000);
        } else {
          notify.show(error.response.data.message, 'error', 4000);
        }
      });
  };
};

export const addCategory = (userid, title, description) => {
    return (dispatch) => {
      return Axios({
              method: 'post',
              url: `${apiUrl}${'users/'}${userid}${'/categories'}`, 
              data: { title: title, description: description },
              headers: authHeader()
        })
        .then(response => {
          dispatch(createCategory(response.data))
          notify.show("Category Added successfully", 'success', 4000);
        })
        .catch(error => {
          if (error.response.data.message.title) {
            notify.show(error.response.data.message.title, 'error', 4000);
          } else {
            notify.show(error.response.data.message.message, 'error', 4000);
          }
        });
    };
};

export const addRecipe = (categoryid, title, description) => {
  return (dispatch) => {
    return Axios({
            method: 'post',
            url: `${apiUrl}${'categories/'}${categoryid}${'/recipes'}`, 
            data: { category_id: categoryid, title: title, description: description },
            headers: authHeader()
      })
      .then(response => {
        dispatch(createRecipe(response.data))
        notify.show("Recipe Added successfully", 'success', 4000);
      })
      .catch(error => {
        if (error.response.data.message.title) {
          notify.show(error.response.data.message.title, 'error', 4000);
        } else {
          notify.show(error.response.data.message.message, 'error', 4000);
        }
      });
  };
};

export const editCategory = (id, userid, title, description) => {
  return (dispatch) => {
    var data;
    if(title===null){
      data = { description: description }
    }
    if(description===null){
      data = { title: title }
    }
    data = { title: title, description: description }
    return Axios({
            method: 'put',
            url: `${apiUrl}${'users/'}${userid}${'/categories/'}${id}`, 
            data: data,
            headers: authHeader()
      })
      .then(response => {
        dispatch(updateCategory(response.data))
        notify.show("Category has been edited", 'success', 4000);
      })
      .catch(error => {
        notify.show(error.response.data.message.message, 'error', 4000);
      });
  };
};

export const editRecipe = (id, categoryid, title, description) => {
  return (dispatch) => {
    var data;
    if(title===null){
      data = { category_id: categoryid, description: description }
    }
    if(description===null){
      data = { category_id: categoryid, title: title }
    }
    data = { category_id: categoryid, title: title, description: description }
    return Axios({
            method: 'put',
            url: `${apiUrl}${'categories/'}${categoryid}${'/recipes/'}${id}`, 
            data: data,
            headers: authHeader()
      })
      .then(response => {
        dispatch(updateRecipe(response.data))
        notify.show("Recipe has been edited", 'success', 4000);
      })
      .catch(error => {
        notify.show(error.response.data.message.message, 'error', 4000);
      });
  };
};

export const deleteCategory = (id, userid) => {
  return (dispatch) => {
    return Axios({
            method: 'delete',
            url: `${apiUrl}${'users/'}${userid}${'/categories/'}${id}`,
            headers: authHeader()
      })
      .then(response => {
        dispatch(removeCategory(response.data))
        notify.show(response.data.message, 'success', 4000);
      })
      .catch(error => {
        notify.show(error.response.data.message, 'error', 4000);
      });
  };
};

export const deleteRecipe = (id, categoryid) => {
  return (dispatch) => {
    return Axios({
            method: 'delete',
            url: `${apiUrl}${'categories/'}${categoryid}${'/recipes/'}${id}`,
            headers: authHeader()
      })
      .then(response => {
        dispatch(removeRecipe(response.data))
        notify.show(response.data.message, 'success', 4000);
      })
      .catch(error => {
        notify.show(error.response.data.message, 'error', 4000);
      });
  };
};

export const loginUser = (email, password) => {
  return (dispatch) => {
    return Axios.post(`${apiUrl}${'users/signin'}`, { email: email, password: password })
      .then(response => {
        dispatch(login(response.data))
        const token = response.data.token
        const userid = response.data.userid
        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('userid', JSON.stringify(userid));
        notify.show(response.data.message, 'success', 4000);
        window.location.assign('/category');
      })
      .catch(error => {
        notify.show("An error occurred.", 'error', 4000);
      });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    return Axios({
        method: 'get',
        url: `${apiUrl}${'users/signout'}`,
        headers: authHeader()
      })
      .then(response => {
        localStorage.removeItem('token');
        localStorage.removeItem('userid');
        notify.show(response.data.message, 'success', 4000);
        window.location.assign("/login");
      })
      .catch(error => {
        notify.show("An error occurred", 'error', 4000);
      });
  };
};

export const registerUser = (username, email, password, firstname, lastname) => {
  const user = {  username: username, 
                  email: email, 
                  password: password,
                  first_name: firstname, 
                  last_name: lastname
              }
  return (dispatch) => {
    return Axios.post(`${apiUrl}${'users'}`, user)
      .then(response => {
        dispatch(register(response.data))
        notify.show(response.data.message, 'success', 4000);
        window.location.assign("/login");
      })
      .catch(error => {
        if (error.response.data.message.username) {
          notify.show(error.response.data.message.username, 'error', 4000);
        } 
        if (error.response.data.message.first_name) {
          notify.show(error.response.data.message.first_name, 'error', 4000);
        } 
        if (error.response.data.message.last_name) {
          notify.show(error.response.data.message.last_name, 'error', 4000);
        } else {
          notify.show(error.response.data.message, 'error', 4000);
        }
      });
  };
};
