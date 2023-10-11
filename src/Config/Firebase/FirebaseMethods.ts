import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, onValue, push } from "firebase/database";
import { app } from "./Firebaseconfig";

const auth = getAuth(app);
const db = getDatabase(app)

// Login
export let FbLogin = (body: any) => {
    return new Promise((resolve, reject) => {
        if (!body.email || !body.password) {
            reject("Email and Password is Required")
        }
        else {
            signInWithEmailAndPassword(auth, body.email, body.password).then((res) => {
                let id = res.user.uid
                const referece = ref(db, `USERS/${id}`)
                onValue(referece, (data) => {
                    if (data.exists()) {
                        resolve(data.val())
                    }
                    else {
                        reject("NO Data Found")
                    }
                })
            }).catch(() => {

            })
        }
    }
    )
}


// 〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰

// Signup
export let fbSignup = (body: any) => {
    return new Promise((resolve, reject) => {
        if (!body.email || !body.password) {
            reject("Email and Password is Required")
        } else {
            createUserWithEmailAndPassword(auth, body.email, body.password).then(res => {
                let id = res.user.uid

                body.id = id
                const referece = ref(db, `USERS/${id}`)
                set(referece, body).then(user => {
                    resolve("User Created Succefully")
                }).catch(error => {
                    reject(error)
                    console.log("something is wrong")
                })

            }).catch(err => {
                reject(err)
            })
        }
    }
    )
}



// 〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰

// AddData
export let FbAdd = (nodeName: string, body: any, id?: string) => {
    return new Promise((resolve, reject) => {

        const ID = push(ref(db, `${nodeName}/`)).key
        body.id = ID
        const referece = ref(db, `${nodeName}/${body.id}`)
        set(referece, body).then((res) => {
            resolve("Data Sent Successsfully ")
        }).catch((err) => {
            reject(err)
        })
    })
}


// 〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰

// DeleteData
export let FbDelete = (nodeName: string, id: string) => {
    return new Promise((resolve, reject) => {
        const reference = ref(db, `${nodeName}/${id}`);
        set(reference, null) // Setting null deletes the data.
            .then(() => {
                resolve("Data deleted successfully");
            })
            .catch((error) => {
                reject(error);
            });
    });
}



// 〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰

// EditData
export let FbEdit = (nodeName: string, id: string, body: any) => {
    return new Promise((resolve, reject) => {
        const reference = ref(db, `${nodeName}/${id}`);
        set(reference, body)
            .then(() => {
                resolve("Data updated successfully");
            })
            .catch((error) => {
                reject(error);
            });
    });
}



// 〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰

// GetData
export let FbGet = (nodeName: string) => {
    return new Promise((resolve, reject) => {
        const referece = ref(db, `${nodeName}`)
        onValue(referece, (data) => {
            if (data.exists()) {
                resolve(Object.values(data.val()))
            } else {
                reject("No Data Found")
            }
        })
    })
}


// 〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰

// GetByID 
export let FbGetByID = (nodeName: string, id: string) => {
    return new Promise((resolve, reject) => {
        const reference = ref(db, `${nodeName}/${id}`);
        onValue(reference, (data) => {
            if (data.exists()) {
                resolve(data.val());
            } else {
                reject("Data not found for the specified ID");
            }
        });
    });
}



// 〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰

// Authentication
export let FbAuth = () => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid
                resolve(uid)
            } else {
                reject('User is Not found')

            }
        })

    })
}


// 〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰

// Logout
export let FbLogout = () => {
    return new Promise ((resolve , reject )=>{
        auth.signOut().then((res)=>{
resolve(res)
        }).catch((err)=>{

reject(err)
        })
    })
 }


// 〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰〰〰〰〰💨〰