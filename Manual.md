# 📚 DOCUMENTACIÓN RPM MARKET

**Última actualización:** 18 de Enero de 2026  
**Ambiente:** Backend API local / Producción en Railway

---

## 📋 ÍNDICE

1. [Estado del Sistema](#-estado-del-sistema)
2. [Credenciales de Acceso](#-credenciales-de-acceso)
3. [Configuración Railway](#-configuración-railway)
4. [Configuración de Correos Gmail](#-configuración-de-correos-gmail)
5. [Sistema de Aprobación de Usuarios](#-sistema-de-aprobación-de-usuarios)
6. [Sistema de PQR](#-sistema-de-pqr)
7. [Protección de Rutas](#-protección-de-rutas)
8. [Endpoints de la API](#-endpoints-de-la-api)
9. [Inicio Rápido](#-inicio-rápido)

---

## ✅ ESTADO DEL SISTEMA

El sistema RPM Market está **100% funcional**.

### URLs Principales (Desarrollo Local)

| Recurso | URL |
|---------|-----|
| Backend | http://localhost:3000/ |
| Health check | http://localhost:3000/health |
| Estado de BD | http://localhost:3000/api/db-status |
| Verificar sesión | http://localhost:3000/api/verificar-sesion |

### Funcionalidades Verificadas

- ✅ Login/Logout con validación de usuarios inactivos
- ✅ Registro con verificación por email (código de 4 dígitos)
- ✅ Panel de administrador completo
- ✅ Sistema de publicaciones (comerciantes)
- ✅ Sistema de PQRs con notificación por correo
- ✅ Marketplace de grúas (prestadores)

---

## 🔑 CREDENCIALES DE ACCESO

### Usuarios de Prueba (contraseña: `123456`)

| Usuario | Correo | Tipo | Estado |
|---------|--------|------|--------|
| Administrador | admin@rpm.com | Administrador | ✅ Activo |
| Juan Pérez | juan@test.com | Natural | ✅ Activo |
| María González | maria@test.com | Comerciante | ✅ Activo |
| Carlos Ramírez | carlos@test.com | PrestadorServicio | ⚠️ Inactivo |

### Admin Principal (Producción)

| Campo | Valor |
|-------|-------|
| Usuario | admin@rpm.com |
| Contraseña | RPM2026* |
| Documento | 1001092582 |

---

## 🚀 CONFIGURACIÓN RAILWAY

### Variables de Entorno Requeridas

```env
DB_HOST=ballast.proxy.rlwy.net
DB_USER=root
DB_PASSWORD=TUWMPrstGJOpAuibaWLddgwsKsNFMnLj
DB_NAME=railway
DB_PORT=16149
SESSION_SECRET=rpm_market_secret_2025
NODE_ENV=development
FRONTEND_URLS=http://localhost:5500,http://127.0.0.1:5500
EMAIL_USER=rpmservice2026@gmail.com
EMAIL_PASS=[contraseña de aplicación Gmail]