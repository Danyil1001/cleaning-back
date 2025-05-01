export const getRequestTemplate = ({
    clientName,
    serviceName,
    email,
    address,
    amountOfRooms,
    amountOfBathrooms,
    amountOfStoreRooms,
    price,
    phone_number,
    time,
    moving_from,
    moving_to
}
    : {
        clientName: string
        phone_number: string
        email: string
        address?: string
        serviceName: string
        amountOfRooms: number | string
        amountOfBathrooms?: number | string
        amountOfStoreRooms: number | string
        price: number | string
        time: number | string
        moving_from?: string
        moving_to?: string
    }
) => `
<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Email Verification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #eaf3f9;
        }

        .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 20px;
            box-shadow: rgba(35, 69, 79, 0.08);
        }

        .logo {
            text-align: center;
            margin-bottom: 20px;
            font-size: 32px;
            font-weight: bold;
            color: #012C39;
        }

        .logo-image {
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
        }

        h2 {
            color: #012C39;
            font-size: 24px;
        }

        p {
            color: #64757B;
            font-size: 16px;
        }

        @media only screen and (max-width: 600px) {
            .container {
                width: 100%;
            }
        }
    </style>
</head>
<body>
     <div class="container">
        <div class="logo-image">
        </div>
        <div class="logo">Message from client</div>
        <h2>Client send request to you</h2>
        <p>
        Client name: ${clientName || ''}<br><br>
        Email: ${email || ''}<br><br>
        Phone number: ${phone_number || ''}<br><br>
        ${address ? `Address: ${address || ''}<br><br>` : ''}
        Service name: ${serviceName || ''}<br><br>
        Amount of rooms: ${amountOfRooms || ''}<br><br>
        ${amountOfBathrooms ? `Amount of bathrooms: ${amountOfBathrooms}<br><br>` : ''}
        Amount of store rooms: ${amountOfStoreRooms}<br><br>
        Approximate price: ${price || ''}<br><br>
        Approximate time: ${time || ''}<br><br>
        ${moving_from ? `From: ${moving_from}` : ""}<br><br>
        ${moving_to ? `To: ${moving_to}` : ""}
        </p>
    </div>
</body>
</html>`;

export const getRequestTemplateForRepair = ({
    clientName,
    email,
    address,
    phone_number
}
    : {
        clientName: string
        phone_number: string
        email: string
        address?: string
    }
) => `
<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Email Verification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #eaf3f9;
        }

        .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 20px;
            box-shadow: rgba(35, 69, 79, 0.08);
        }

        .logo {
            text-align: center;
            margin-bottom: 20px;
            font-size: 32px;
            font-weight: bold;
            color: #012C39;
        }

        .logo-image {
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
        }

        h2 {
            color: #012C39;
            font-size: 24px;
        }

        p {
            color: #64757B;
            font-size: 16px;
        }

        @media only screen and (max-width: 600px) {
            .container {
                width: 100%;
            }
        }
    </style>
</head>
<body>
     <div class="container">
        <div class="logo-image">
        </div>
        <div class="logo">Message from client</div>
        <h2>Client sent request about some repair service</h2>
        <p>
        Client name: ${clientName || ''}<br><br>
        Email: ${email || ''}<br><br>
        Phone number: ${phone_number || ''}<br><br>
        Address: ${address || ''}<br><br>
        </p>
    </div>
</body>
</html>`;