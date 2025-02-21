"use client"

import { useEffect } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css" // Import CSS do Leaflet

export default function MapaUsuario() {
  useEffect(() => {
    const map = L.map("map").setView([51.505, -0.09], 13)

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map)

    map.locate({ setView: true, maxZoom: 16 })

    function onLocationFound(e) {
      const radius = e.accuracy / 2
      L.marker(e.latlng)
        .addTo(map)
        .bindPopup(`Você está dentro de ${radius} metros deste ponto`)
        .openPopup()
      L.circle(e.latlng, radius).addTo(map)
    }

    function onLocationError(e) {
      alert(e.message)
    }

    map.on("locationfound", onLocationFound)
    map.on("locationerror", onLocationError)
  }, [])

  return <div id="map" style={{ height: "400px", width: "100%" }} />
}
