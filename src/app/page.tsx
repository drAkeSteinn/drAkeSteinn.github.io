'use client'

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, XCircle, Star, Crown, Square } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const developmentPlans = [
  {
    id: 'basic',
    icon: Square,
    iconColor: 'text-slate-600',
    title: 'Plan Básico',
    price: '$3,500 USD',
    description: 'Desarrollo completo de la plataforma',
    isRecommended: false,
    features: [
      'Desarrollo completo de la plataforma',
      'Base de datos personalizada según giro',
      'Dashboard de análisis',
      'Mapa de competencia',
      'Análisis por retail',
      'Battle Cards (comparativo de productos)',
      'Gestión de usuarios y permisos',
      'Configuración inicial'
    ],
    additionalFeatures: [
      '10 horas de desarrollo para ajustes post-entrega',
      '1 junta presencial de capacitación',
      '2 juntas de acompañamiento y resolución de dudas'
    ],
    excludedFeatures: [
      'Videos tutoriales',
      'Cambios estructurales mayores',
      'Nuevos módulos'
    ]
  },
  {
    id: 'professional',
    icon: Star,
    iconColor: 'text-amber-500',
    title: 'Plan Profesional',
    price: '$4,500 USD',
    description: 'Ideal para operación diaria',
    isRecommended: true,
    features: [
      'Desarrollo completo de la plataforma',
      'Base de datos personalizada según giro',
      'Dashboard de análisis',
      'Mapa de competencia',
      'Análisis por retail',
      'Battle Cards (comparativo de productos)',
      'Gestión de usuarios y permisos',
      'Configuración inicial'
    ],
    additionalFeatures: [
      '20 horas de desarrollo para ajustes post-entrega',
      '2 juntas de capacitación',
      '2 juntas de acompañamiento',
      'Videos tutoriales base de funcionamiento'
    ],
    excludedFeatures: []
  },
  {
    id: 'premium',
    icon: Crown,
    iconColor: 'text-purple-600',
    title: 'Plan Premium',
    price: '$5,000 USD',
    description: 'Pensado para empresas con equipos grandes',
    isRecommended: false,
    features: [
      'Todo lo incluido en el Plan Profesional',
      'Personalización avanzada por giro del negocio',
      'Análisis estratégico con el cliente',
      'Preparación para escalabilidad futura'
    ],
    additionalFeatures: [
      '30 horas de desarrollo para ajustes post-entrega',
      'Capacitación presencial o híbrida',
      'Videos tutoriales personalizados',
      'Documentación funcional básica',
      'Prioridad en soporte post-entrega',
      'Optimización de flujos de trabajo',
      'Ajustes específicos por área',
      'Ventas',
      'Supervisión',
      'Administración'
    ],
    excludedFeatures: []
  }
]

const maintenancePlans = [
  {
    id: 'operation-basic',
    icon: Square,
    iconColor: 'text-emerald-600',
    title: 'Plan Operación Básica',
    price: '$600 USD / mes',
    description: 'Ideal para clientes que buscan estabilidad',
    isRecommended: false,
    features: [
      'Operación continua de la plataforma',
      'Soporte técnico básico',
      'Corrección de errores',
      'Ajustes menores',
      'Respaldo periódico de información'
    ],
    issueManagement: {
      priority: 'Estándar',
      details: [
        'Registro del issue',
        'Atención en cola general',
        'Comunicación de estatus'
      ]
    },
    additionalFeatures: []
  },
  {
    id: 'operation-professional',
    icon: Star,
    iconColor: 'text-amber-500',
    title: 'Plan Operación Profesional',
    price: '$1,000 USD / mes',
    description: 'Mayor agilidad y optimización continua',
    isRecommended: true,
    features: [
      'Todo lo incluido en el Plan Operación Básica',
      'Ajustes funcionales continuos',
      'Mejoras operativas',
      'Optimización de flujos',
      'Revisión mensual de necesidades'
    ],
    issueManagement: {
      priority: 'Prioritario',
      details: [
        'Seguimiento activo',
        'Mayor agilidad frente al plan estándar',
        'Actualizaciones periódicas'
      ]
    },
    additionalFeatures: []
  },
  {
    id: 'operation-premium',
    icon: Crown,
    iconColor: 'text-purple-600',
    title: 'Plan Operación Premium',
    price: '$1,500 USD / mes',
    description: 'Máxima prioridad y soporte ejecutivo',
    isRecommended: false,
    features: [
      'Todo lo incluido en el Plan Operación Profesional',
      'Cambios estratégicos',
      'Evolución continua de la plataforma',
      'Reunión ejecutiva mensual',
      'Reporte ejecutivo',
      'Soporte directo con responsable del proyecto'
    ],
    issueManagement: {
      priority: 'Premium',
      details: [
        'Máxima prioridad en cola',
        'Seguimiento directo',
        'Atención prioritaria ante incidencias críticas'
      ]
    },
    additionalFeatures: []
  }
]

const notes = [
  'La prioridad del issue define el orden de atención, no la resolución inmediata.',
  'Nuevos módulos, rediseños o integraciones se cotizan por separado.',
  'Las horas incluidas en desarrollo no son acumulables.',
  'El servicio mensual es indispensable para la operación de la plataforma.'
]

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
              Planes de Desarrollo y Mantenimiento
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
              Claridad · Control · Profesionalismo · Enfoque empresarial
            </p>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="development" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white dark:bg-slate-900 p-1 border border-slate-200 dark:border-slate-700">
                <TabsTrigger
                  value="development"
                  className="px-6 py-2.5 text-sm md:text-base font-medium data-[state=active]:bg-slate-900 data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-slate-900"
                >
                  Planes de Desarrollo
                </TabsTrigger>
                <TabsTrigger
                  value="maintenance"
                  className="px-6 py-2.5 text-sm md:text-base font-medium data-[state=active]:bg-slate-900 data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-slate-900"
                >
                  Planes de Mantenimiento
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Development Plans Tab */}
            <TabsContent value="development">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {developmentPlans.map((plan, index) => {
                    const Icon = plan.icon
                    return (
                      <motion.div
                        key={plan.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className={`relative ${plan.isRecommended ? 'lg:-mt-4' : ''}`}
                      >
                        {plan.isRecommended && (
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                            <Badge className="bg-amber-500 text-white border-amber-500 px-3 py-1 text-sm font-semibold shadow-md">
                              Recomendado
                            </Badge>
                          </div>
                        )}
                        <Card className={`h-full ${plan.isRecommended ? 'border-amber-400 dark:border-amber-500 shadow-lg' : 'border-slate-200 dark:border-slate-700'}`}>
                          <CardHeader className="space-y-3">
                            <div className="flex items-center justify-between">
                              <Icon className={`w-10 h-10 ${plan.iconColor}`} />
                              {plan.isRecommended && (
                                <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                              )}
                            </div>
                            <CardTitle className="text-xl md:text-2xl">{plan.title}</CardTitle>
                            <CardDescription className="text-base">{plan.description}</CardDescription>
                            <div className="pt-2">
                              <span className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                                {plan.price}
                              </span>
                            </div>
                          </CardHeader>

                          <CardContent className="space-y-6">
                            {/* Included Features */}
                            <div>
                              <h4 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm uppercase tracking-wide">
                                Incluye
                              </h4>
                              <ul className="space-y-2.5">
                                {plan.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-500 shrink-0 mt-0.5" />
                                    <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                                      {feature}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Additional Features */}
                            {plan.additionalFeatures.length > 0 && (
                              <div>
                                <h4 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm uppercase tracking-wide">
                                  Incluye además
                                </h4>
                                <ul className="space-y-2.5">
                                  {plan.additionalFeatures.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2.5">
                                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-500 shrink-0 mt-0.5" />
                                      <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                                        {feature}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Excluded Features */}
                            {plan.excludedFeatures.length > 0 && (
                              <div>
                                <h4 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm uppercase tracking-wide">
                                  No incluye
                                </h4>
                                <ul className="space-y-2.5">
                                  {plan.excludedFeatures.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2.5">
                                      <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                      <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                                        {feature}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            </TabsContent>

            {/* Maintenance Plans Tab */}
            <TabsContent value="maintenance">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8 p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                  <p className="text-slate-700 dark:text-slate-300 text-center text-base leading-relaxed">
                    La plataforma opera bajo un modelo de servicio continuo que garantiza estabilidad, continuidad y evolución.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {maintenancePlans.map((plan, index) => {
                    const Icon = plan.icon
                    return (
                      <motion.div
                        key={plan.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className={`relative ${plan.isRecommended ? 'lg:-mt-4' : ''}`}
                      >
                        {plan.isRecommended && (
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                            <Badge className="bg-amber-500 text-white border-amber-500 px-3 py-1 text-sm font-semibold shadow-md">
                              Recomendado
                            </Badge>
                          </div>
                        )}
                        <Card className={`h-full ${plan.isRecommended ? 'border-amber-400 dark:border-amber-500 shadow-lg' : 'border-slate-200 dark:border-slate-700'}`}>
                          <CardHeader className="space-y-3">
                            <div className="flex items-center justify-between">
                              <Icon className={`w-10 h-10 ${plan.iconColor}`} />
                              {plan.isRecommended && (
                                <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                              )}
                            </div>
                            <CardTitle className="text-xl md:text-2xl">{plan.title}</CardTitle>
                            <CardDescription className="text-base">{plan.description}</CardDescription>
                            <div className="pt-2">
                              <span className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                                {plan.price}
                              </span>
                            </div>
                          </CardHeader>

                          <CardContent className="space-y-6">
                            {/* Included Features */}
                            <div>
                              <h4 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm uppercase tracking-wide">
                                Incluye
                              </h4>
                              <ul className="space-y-2.5">
                                {plan.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-500 shrink-0 mt-0.5" />
                                    <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                                      {feature}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Issue Management */}
                            {plan.issueManagement && (
                              <div>
                                <h4 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm uppercase tracking-wide">
                                  Gestión de Issues
                                </h4>
                                <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-3 mb-3">
                                  <span className="text-sm font-medium text-slate-900 dark:text-white">
                                    Prioridad de atención: {plan.issueManagement.priority}
                                  </span>
                                </div>
                                <ul className="space-y-2.5">
                                  {plan.issueManagement.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-start gap-2.5">
                                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-500 shrink-0 mt-0.5" />
                                      <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                                        {detail}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>

          {/* Important Notes */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12"
          >
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 p-6 md:p-8">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4 text-lg flex items-center gap-2">
                <span className="text-xl">📌</span>
                Notas Importantes
              </h3>
              <ul className="space-y-3">
                {notes.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500 shrink-0 mt-2" />
                    <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {note}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 mt-auto">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-slate-600 dark:text-slate-400">
            Plataforma de Análisis de Competencia · Soluciones empresariales
          </p>
        </div>
      </footer>
    </div>
  )
}
