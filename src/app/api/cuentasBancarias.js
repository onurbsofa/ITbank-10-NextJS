const usuariosFake =
[
  { "id":1,
    "nombre": "Juan Perez",
    "usuario": "juan.perez@example.com",
    "contraseña": "password123",
    "cuentas": [
      {
        "moneda": "ARS",
        "saldo": 2000,
        "historial": [
          {
            "descripcion": "Saldo Inicial",
            "cantidad": 2000,
            "estado": 2000,
            "fecha": "30/9/2023, 20:00:00"
          },
          {
            "descripcion": "Conversion de Monedas",
            "cantidad": 116.75,
            "estado": 2116.75,
            "fecha": "30/9/2023, 20:05:19"
          },
          {
            "descripcion": "Pago de Prestamo en Dolares a 6 meses (cuota 1)",
            "cantidad": -95.88,
            "estado": 2020.87,
            "fecha": "30/9/2023, 20:04:39"
          },
          {
            "descripcion": "Transferencia a CVU 1234567",
            "cantidad": -543.25,
            "estado": 1477.62,
            "fecha": "29/9/2023, 18:14:22"
          }
        ]
      },
      {
        "moneda": "USD",
        "saldo": 750,
        "historial": [
          {
            "descripcion": "Saldo Inicial",
            "cantidad": 750,
            "estado": 750,
            "fecha": "30/9/2023, 20:00:00"
          },
          {
            "descripcion": "Compra de Divisas",
            "cantidad": 500,
            "estado": 1250,
            "fecha": "30/9/2023, 10:30:15"
          },
          {
            "descripcion": "Transferencia a cuenta en USD",
            "cantidad": -300,
            "estado": 950,
            "fecha": "29/9/2023, 15:45:30"
          }
        ]
      }
    ]
  },
  { "id":2,
    "nombre": "Maria Rodriguez",
    "usuario": "maria.rodriguez@example.com",
    "contraseña": "securepass789",
    "cuentas": [
      {
        "moneda": "ARS",
        "saldo": 1250,
        "historial": [
          {
            "descripcion": "Saldo Inicial",
            "cantidad": 1250,
            "estado": 1250,
            "fecha": "30/9/2023, 20:00:00"
          },
          {
            "descripcion": "Depósito",
            "cantidad": 500,
            "estado": 1750,
            "fecha": "30/9/2023, 12:20:45"
          },
          {
            "descripcion": "Retiro en Cajero",
            "cantidad": -100,
            "estado": 1650,
            "fecha": "29/9/2023, 14:15:10"
          }
        ]
      },
      {
        "moneda": "USD",
        "saldo": 300,
        "historial": [
          {
            "descripcion": "Saldo Inicial",
            "cantidad": 300,
            "estado": 300,
            "fecha": "30/9/2023, 20:00:00"
          },
          {
            "descripcion": "Transferencia desde cuenta en USD",
            "cantidad": 100,
            "estado": 400,
            "fecha": "30/9/2023, 14:30:05"
          }
        ]
      }
    ]
  },

  { "id":3,
    "nombre": "Laura Smith",
    "usuario": "laura.smith@example.com",
    "contraseña": "securepass123",
    "cuentas": [
      {
        "moneda": "ARS",
        "saldo": 1500,
        "historial": [
          {
            "descripcion": "Saldo Inicial",
            "cantidad": 1500,
            "estado": 1500,
            "fecha": "30/9/2023, 20:00:00"
          },
          {
            "descripcion": "Transferencia a CVU 9876543",
            "cantidad": -250,
            "estado": 1250,
            "fecha": "30/9/2023, 15:20:00"
          },
          {
            "descripcion": "Depósito",
            "cantidad": 400,
            "estado": 1650,
            "fecha": "29/9/2023, 10:45:00"
          }
        ]
      },
      {
        "moneda": "USD",
        "saldo": 1000,
        "historial": [
          {
            "descripcion": "Saldo Inicial",
            "cantidad": 1000,
            "estado": 1000,
            "fecha": "30/9/2023, 20:00:00"
          },
          {
            "descripcion": "Compra de Divisas",
            "cantidad": 200,
            "estado": 1200,
            "fecha": "30/9/2023, 12:15:00"
          }
        ]
      }
    ]
  },
  {
    "nombre": "Carlos Gomez",
    "usuario": "carlos.gomez@example.com",
    "contraseña": "secretpassword",
    "cuentas": [
      {
        "moneda": "ARS",
        "saldo": 2500,
        "historial": [
          {
            "descripcion": "Saldo Inicial",
            "cantidad": 2500,
            "estado": 2500,
            "fecha": "30/9/2023, 20:00:00"
          },
          {
            "descripcion": "Pago de Servicios",
            "cantidad": -150,
            "estado": 2350,
            "fecha": "30/9/2023, 11:30:00"
          },
          {
            "descripcion": "Transferencia a CVU 3456789",
            "cantidad": -300,
            "estado": 2050,
            "fecha": "29/9/2023, 16:00:00"
          }
        ]
      },
      {
        "moneda": "USD",
        "saldo": 800,
        "historial": [
          {
            "descripcion": "Saldo Inicial",
            "cantidad": 800,
            "estado": 800,
            "fecha": "30/9/2023, 20:00:00"
          },
          {
            "descripcion": "Transferencia a cuenta en USD",
            "cantidad": -100,
            "estado": 700,
            "fecha": "30/9/2023, 14:45:00"
          }
        ]
      }
    ]
  }
]

export default usuariosFake;