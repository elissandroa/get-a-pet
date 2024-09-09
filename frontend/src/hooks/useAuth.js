import api from "../utils/api";
import { useState, useEffect } from 'react'
import React from 'react'

export default function useAuth() {
    async function register(user) {
        try {
            const data = api.post('/users/register/', user).then((response) => {
                return response.data;
            })
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    return { register }
}